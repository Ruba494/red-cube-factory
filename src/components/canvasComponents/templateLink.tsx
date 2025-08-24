import {motion} from "motion/react";
import {useContext, useRef} from "react";
import {CanvasContext} from "./canvasContext.tsx";
import {INodeData, NODES, NodeTypes, NodeTypesEnum} from "../../pages/constants/nodes.ts";
import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../../routes";
import {useNavigate} from "react-router";
import {Tags} from "../Tags.tsx";
import {template} from "lodash";

interface ITemplateLinkProps {
    data:INodeData
    WithClickAction:boolean
    type:NodeTypes
}
export const TemplateLink = ({data,WithClickAction=true  ,type=NodeTypesEnum.templateNode }:ITemplateLinkProps) => {
    const {setSelectedNode,} = useContext(CanvasContext);
    const ref = useRef(null);

    console.log('templateLink type', type)
    const handleClick = (e,id) => {
        e.preventDefault()
        if(WithClickAction){
            console.log('handleClick',type)
            setSelectedNode({data: {...data,type:type},ref:ref})
        }else {

            // setSelectedNode({data: {...NODES.find(item=>item.data.previewAccessor === id),type:NodeTypesEnum.templateNode},ref:ref})
            if(data?.isOriginalContent){
                // navigate(templatePath)
            }else {
                window.open(data.url, "_blank", "noreferrer");
            }

        }
    };

    return<motion.div className={'template-link'}
               ref={ref}
                      {...WithClickAction?{
                          initial: {
                              opacity:0 },
                          animate:{
                              opacity:1,
                              transition: {
                                  delay: 1 },
                          }
                      }:{}}
               onClick={(e)=>handleClick(e,data?.previewAccessor)}>
        {WithClickAction?
        <>
            <div className={'emoji'}>{data.emoji}</div>
            <div className={'title'}>{data.title}</div>
            <div className={'description'}><Tags tags={data.description}/></div>
        </>:
            <div className={'navigate-to'}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87867 1.63604C4.87867 1.08375 5.32639 0.636038 5.87867 0.636038H14.364C14.9162 0.636038 15.364 1.08375 15.364 1.63604V10.1213C15.364 10.6736 14.9162 11.1213 14.364 11.1213C13.8117 11.1213 13.364 10.6736 13.364 10.1213V4.05025L2.34314 15.0711C1.95261 15.4616 1.31945 15.4616 0.928925 15.0711C0.538401 14.6805 0.538401 14.0474 0.928925 13.6569L11.9497 2.63604H5.87867C5.32639 2.63604 4.87867 2.18832 4.87867 1.63604Z" fill="white"/>
                </svg>
            </div>
        }
    </motion.div>
}