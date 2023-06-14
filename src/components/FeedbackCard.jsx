import { quotes } from "../assets";
import FdbT from "./FeedbackCardTailwind";

const FeedbackCard = ({content, name, title, img}) => (
  <div className={FdbT.main}>
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className={FdbT.text}>
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className={FdbT.name}>
          {name}
        </h4>
        <p className={FdbT.fun}>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default FeedbackCard