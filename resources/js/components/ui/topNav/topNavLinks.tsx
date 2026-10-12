import { Link } from "@inertiajs/react";
import { dashboard, home } from "@/routes";

type Props = {};

const topNavLinks = (props: Props) => {
    return (
        <div>
            <Link
                href={home()}
                className="inline-block rounded-sm  px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                الرئيسية
            </Link>
            <Link
                href={home()}
                className="inline-block rounded-sm  px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                المنيو
            </Link>
            <Link
                href={home()}
                className="inline-block rounded-sm  px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                العروض
            </Link>
            <Link
                href={home()}
                className="inline-block rounded-sm  px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                تتبع الطلب{" "}
            </Link>

            <Link
                href={dashboard()}
                className="inline-block rounded-sm  px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                أتصل بنا
            </Link>
        </div>
    );
};

export default topNavLinks;
