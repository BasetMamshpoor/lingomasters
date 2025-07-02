import { useState } from "react";
import LearningStart from "./LearningStart";
import LearningStart2 from "./LearningStart2";
import LearningStart3 from "./LearningStart3";
import LearningStart4 from "./LearningStart4";
import LearningStart5 from "./LearningStart5";

export default function LearningFlow() {
    const [step, setStep] = useState(1);
    const [path, setPath] = useState(null);
    const [knowsLevel, setKnowsLevel] = useState(null);

    return (
        <>
            {step === 1 && (
                <LearningStart onNext={() => setStep(2)} />
            )}
            {step === 2 && (
                <LearningStart2
                    onSelect={(selected) => {
                        setPath(selected);
                        setStep(3);
                    }}
                    onBack={() => setStep(1)}
                />
            )}
            {step === 3 && (
                <LearningStart3
                    path={path}
                    onSelect={(level) => {
                        setKnowsLevel(level);
                        setStep(4);
                    }}
                    onBack={() => setStep(2)}
                />
            )}
            {step === 4 && (
                <LearningStart4
                    path={path}
                    knowsLevel={knowsLevel}
                    onNeedHelp={() => setStep(5)}
                    onBack={() => setStep(3)}
                />
            )}
            {step === 5 && <LearningStart5 onBack={() => setStep(4)} />}
        </>
    );
}

