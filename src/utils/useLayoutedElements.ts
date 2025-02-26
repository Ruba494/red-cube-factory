import {useNodesInitialized, useReactFlow, useViewport,} from "@xyflow/react";
import { useEffect, useMemo, useRef} from "react";
import { forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY } from "d3-force";

const simulation = forceSimulation()
    .force("charge", forceManyBody().strength(-1000))
    .force("x", forceX().x(0).strength(0.05))
    .force("y", forceY().y(0).strength(0.1))
    .force("collide", forceCollide)
    .alphaTarget(0.2)
    .stop();

export const useLayoutedElements = (centerPoint,width,height) => {
    const { getNodes, setNodes, getEdges,setViewport } = useReactFlow();
    const initialized = useNodesInitialized();

    const draggingNodeRef = useRef(null);
    const centered = useRef(false);
    const randomized = useRef(false); // Prevent multiple randomizations

    const dragEvents = useMemo(
        () => ({
            start: (_event, node) => (draggingNodeRef.current = node),
            drag: (_event, node) => (draggingNodeRef.current = node),
            stop: () => (draggingNodeRef.current = null),
        }),
        []
    );

    const randomizePositions = (nodes) => {
        if (randomized.current) return nodes; // Ensure it runs only once per refresh

        let reorderedNodes= nodes.map((node) => ({
            ...node,
            position: {
                x: Math.random() * width - width / 2, // Spread nodes randomly across viewport
                y: Math.random() * height - height / 2,
            },
        }))
        return reorderedNodes;
    };
    const centerNodes = (nodes) => {
        if (!nodes.length || centered.current) return;
        // Set viewport to center nodes in the middle of the screen
        setViewport(centerPoint);

        centered.current = true; // Prevent multiple calls
    };

    const result=  useMemo(() => {
        let nodes = randomizePositions(getNodes())
        let edges = getEdges();
        let running = false;

        if (!initialized || nodes.length === 0) return [false, {}, dragEvents];

        simulation.nodes(nodes).force(
            "link",
            forceLink(edges)
                .id((d) => d['id'])
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
                    const updatedNode = nodes.find((n) => n.id === node.id);
                    return updatedNode
                        ? { ...node, position: { x: updatedNode.x, y: updatedNode.y } }
                        : node;
                })
            );

            centerNodes(nodes)
            if (running) window.requestAnimationFrame(tick);
        };

        const toggle = () => {
            if (!running) {
                getNodes().forEach((node, index) => {
                    let simNode = nodes[index];
                    Object.assign(simNode, node);
                    simNode.x = node.position.x;
                    simNode.y = node.position.y;
                });
            }
            running = !running;
            if (running) window.requestAnimationFrame(tick);
        };

        const isRunning = () => running;
        randomized.current = true; // Mark nodes as randomized
        return [true, { toggle, isRunning }, dragEvents];
    }, [initialized, dragEvents, getNodes, getEdges, setNodes]);


     // Use an effect to automatically trigger `toggle` when the hook is ready.
  useEffect(() => {
    // @ts-ignore
      const [isInitialized, { toggle, isRunning }, dragEvents] = result;
    if (isInitialized && !isRunning()) {
      toggle();
    }
    // We want this to run when `result` changes (typically on initialization).
  }, [result]);

  return result
};
