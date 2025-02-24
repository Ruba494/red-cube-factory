import {motion} from "motion/react";
import {NodeTypesEnum} from "../../pages/constants.ts";
import {useContext, useRef} from "react";
import {CanvasContext} from "./canvasContext.tsx";

export const TemplateLink = ({data,WithClickAction=true  }) => {
    const {setSelectedNode,} = useContext(CanvasContext);
    const ref = useRef(null);

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
               onClick={(e)=>{
        e.preventDefault()
                   if(WithClickAction){
                       setSelectedNode({data: {...data,type:NodeTypesEnum.templateNode},ref:ref})
                   }else {
                   //@TODO: navigate to google drive line?
                   }

    }}>
        <div className={'emoji'}>{data.emoji}</div>
        <div className={'title'}>{data.title}</div>
        <div className={'description'}>{data.description}</div>
        <div className={'description'}>{data.url}</div>
    </motion.div>
}