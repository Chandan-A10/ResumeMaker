import { Empty } from "antd"
import CvCard from "./cvCard"

const Draft=( {cvList, deleteCV, previewCV} )=>{
    return(
        <div className="resume-dashboard">
        {(cvList.length===0)?<Empty/>:(
            cvList.map((x)=>{
                if(x.isDraft){
                    console.log(x)
                    return(
                        <CvCard
                        key={x.id}
                        cv={x}
                        deleteCv={deleteCV}
                        previewCv={previewCV}
                        >
                        </CvCard>
                    )
                }
                else{
                    return false;
                }
            })
        )}
        </div>
    )
}

export default Draft