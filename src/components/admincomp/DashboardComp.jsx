import { TbCup } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
function CardDashboardComp(props) {
    return (
        <div className={`flex ${props.style} w-85 h-30`}>
            <h4>
            <span className="rounded-full bg-[#ffffff] p-3 mx-3">
                {props.icon}
            </span>
            {props.title}
            </h4>
            <div className="w-73 flex items-center gap-3 mx-3">
                <span className="text-[24px] font-bold text-[#FFFFFF]">{props.value}</span>
                <span className="text-[12px] font-normal text-[#FFFFFF]">{props.presentas}</span>
            </div>
        </div>
    )
}

export default function DashboardCard() {
    return (
        <div className="flex md:flex-row flex-col items-center gap-5 [&>div]:flex-col [&>div]:justify-center [&>div]:items-center [&>div]:justify-self-center [&>div]:gap-5 [&>div]:rounded-lg [&>div>h4]:w-73 [&>div>h4]:text-[14px] [&>div>h4]:font-medium [&>div>h4]:text-[#FFFFFF] [&>div>h4]:flex [&>div>h4]:items-center [&>div>h4]:gap-3">
            <CardDashboardComp style="bg-[#6FC276]" title="Order on Progres" value="200" presentas="+11.01%" icon={<TbCup size={20} color="#ff8906" />} />
            <CardDashboardComp style="bg-[#6C69D4]" title="Order on Progres" value="100" presentas="+4.01%" icon={<FaTruck size={20} color="#ff8906" />} />
            <CardDashboardComp style="bg-[#C56FBC]" title="Order on Progres" value="100" presentas="+4.01%" icon={<FaUserCheck size={20} color="#ff8906" />} />
        </div>
    )
}