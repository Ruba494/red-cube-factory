import {useNodesInitialized, useReactFlow} from "@xyflow/react";
import { useEffect, useMemo, useRef, useCallback} from "react";
import { forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY } from "d3-force";

const simulation = forceSimulation()
    .force("charge", forceManyBody().strength(-1400))
    .force("x", forceX().x(0).strength(0.05))
    .force("y", forceY().y(0).strength(0.1))
    .force("collide", forceCollide)
    .alphaTarget(0.2)
    .stop();

interface IUseLayoutedElementsResults {
    isInitialized:boolean
    toggle:any
    isRunning:any
    dragEvents:any
}

interface IUseLayoutedElementsProps {
    centerPoint:{
        x:number,
        y:number,
        zoom:number,
    }
    width:number
    height:number
    selectedTag:any;
}

export const useLayoutedElements = ({centerPoint, width, height,selectedTag}:IUseLayoutedElementsProps) :IUseLayoutedElementsResults=> {
    const { getNodes, setNodes, getEdges,setViewport} = useReactFlow();
    const initialized = useNodesInitialized();

    const draggingNodeRef = useRef<any>(null);
    const centered = useRef(false);
    const randomized = useRef(false);
    const runningRef = useRef(false);

    const dragEvents:{
        start:any
        drag:any
        stop:any
    } = useMemo(
        () => ({
            start: (_event:any, node:any) => (draggingNodeRef.current = node),
            drag: (_event:any, node:any) => (draggingNodeRef.current = node),
            stop: () => (draggingNodeRef.current = null),
        }),
        []
    );

    const randomizePositions = useCallback((nodes:any) => {
        if (randomized.current) return nodes;

        let reorderedNodes= nodes.map((node:any) => ({
            ...node,
            position: {
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
            },
        }))
        return reorderedNodes;
    }, [width, height]);

    const centerNodes = useCallback((nodes:any) => {
        if (!nodes.length || centered.current) return;
        setViewport(centerPoint);
        centered.current = true;
    }, [centerPoint, setViewport]);

    const toggle = useCallback(() => {
        const nodes = randomizePositions(getNodes());
        const edges = getEdges();

        if (!initialized || nodes.length === 0) return;

        simulation.nodes(nodes).force(
            "link",
            forceLink(edges)
                .id((d:any) => d['id'])
                .strength(0.05)
                .distance(100)
        );

        const tick = () => {
            getNodes().forEach((node, i) => {
                const dragging = draggingNodeRef.current?.id === node.id;

                if (dragging) {
                    nodes[i].fx = draggingNodeRef.current.position.x;
                    nodes[i].fy = draggingNodeRef.current.position.y;
                } else {
                    delete nodes[i].fx;
                    delete nodes[i].fy;
                }
            });

            simulation.tick();
            setNodes((prevNodes) =>
                prevNodes.map((node) => {
                    const updatedNode = nodes.find((n:any) => n.id === node.id);
                    return updatedNode
                        ? { ...node, position: { x: updatedNode.x, y: updatedNode.y } }
                        : node;
                })
            );

            centerNodes(nodes);
            if (runningRef.current) window.requestAnimationFrame(tick);
        };

        if (!runningRef.current) {
            getNodes().forEach((node, index) => {
                let simNode = nodes[index];
                Object.assign(simNode, node);
                simNode.x = node.position.x;
                simNode.y = node.position.y;
            });
        }

        runningRef.current = !runningRef.current;
        randomized.current = true;

        if (runningRef.current) window.requestAnimationFrame(tick);
    }, [initialized, randomizePositions, centerNodes, getNodes, getEdges, setNodes]);

    const isRunning = useCallback(() => runningRef.current, []);

    const result = useMemo(() => ({
        isInitialized: initialized,
        toggle,
        isRunning,
        dragEvents
    }), [initialized, toggle, isRunning, dragEvents]);

    useEffect(() => {
        if (initialized && !runningRef.current) {
            toggle();
        }
    }, [initialized]);

    useEffect(() => {
        if(selectedTag){
            //retrigger with updated nodes
            if (runningRef.current && initialized) {
                // Just restart the simulation with current nodes
                runningRef.current = false;
                setTimeout(() => {
                    if (!runningRef.current) {
                        toggle();
                    }
                }, 50);
            }
        } else {
            // When deselecting, reset randomized to allow new nodes to be positioned from borders
            if (initialized) {
                randomized.current = false;
                centered.current = false;
                runningRef.current = false;
                setTimeout(() => {
                    if (!runningRef.current) {
                        toggle();
                    }
                }, 50);
            }
        }
    }, [selectedTag]);

    return result;
};