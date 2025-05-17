import ExamsProvider, {useExamsContext} from "@/providers/ExamProvider";
import HeroExam from "@/features/exams/HeroExam";
import NavbarExam from "@/features/exams/NavbarExam";
import ExamProgress from "@/features/exams/ExamProgress";
import PartType from "@/features/exams/PartType";
import {Spinner} from "@heroui/react";

const StartExamContent = () => {
    const {part, isLoading, data} = useExamsContext();

    if (isLoading) return <div className="text-center py-10"><Spinner color="success" label={'در حال بارگزاری ...'}/></div>;

    return (
        <div className="my-14 font-Inner">
            {part === 1 ? (
                <HeroExam/>
            ) : (
                <>
                    <NavbarExam/>
                    <ExamProgress/>
                    <PartType type={data.questionType}/>
                </>
            )}
        </div>
    );
};

const StartExam = () => {
    return (
        <ExamsProvider>
            <StartExamContent/>
        </ExamsProvider>
    );
};

// export async function getServerSideProps(context) {
//     const { id } = context.params;
//     return { props: { id } };
// }

export default StartExam;
