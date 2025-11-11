import { Card } from "./ui/card";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Circle, TrendingDown, TrendingUp } from "lucide-react";
export function Syllabus({selectedTopic, setSelectedTopic}) {
  const dataSet = [
    {
      id: "1",
      name: "Testicular Lump",
      category: "Outpatient Stations",
      completed: true,
      grade: "Pass",
      coverage: [
        "Focused scrotal history (onset, pain, systemic symptoms)",
        "Relevant past medical/surgical history and fertility questions",
        "Inspection and palpation technique (sitting and supine)",
        "Differentiation: epididymal, testicular, hydrocele, hernia",
        "When to request ultrasound and tumor markers",
        "Initial outpatient management and safety-netting advice",
        "Clear explanation of red-flags and urgency pathway",
      ],
      strengths: [
        "Structured history — covered pain, systemic symptoms and risk factors",
        "Good exam technique with clear communication to patient",
        "Accurate differential between epididymal and intratesticular causes",
        "Appropriate escalation plan for suspicious lumps",
      ],
      improvements: [
        "Mention testicular tumor markers and timeline for investigations",
        "Be more explicit about counseling re: fertility and fertility-preserving options",
        "State follow-up timing and who to contact for worsening symptoms",
      ],
    },

    {
      id: "2",
      name: "Raised PSA",
      category: "Outpatient Stations",
      completed: false,
      grade: "Borderline",
      coverage: [
        "Indications for PSA testing and factors that affect results",
        "Interpreting PSA values by age and trend",
        "Assessment for prostatitis, urinary retention and instrumentation",
        "Shared decision-making around biopsy vs monitoring",
        "Risk communication (sensitivity, false positives, harms)",
      ],
      strengths: [
        "Explained basic meaning of PSA and possible causes clearly",
        "Showed awareness of overdiagnosis and need for balanced discussion",
      ],
      improvements: [
        "Should discuss PSA velocity/trend and age-specific thresholds",
        "Include alternatives (MRI triage, repeat PSA after treating infections)",
        "Give clearer recommendation and safety-netting for raised values",
      ],
    },

    {
      id: "3",
      name: "Haematuria (Outpatient)",
      category: "Outpatient Stations",
      completed: true,
      grade: "Pass",
      coverage: [
        "Differentiate visible vs microscopic haematuria",
        "Key red flags (smoking, weight loss, persistent pain)",
        "Appropriate basic investigations (urine dip, culture, cytology, imaging)",
        "Risk stratification for urothelial cancer",
        "Referral criteria and urgent pathway",
      ],
      strengths: [
        "Systematic approach to red-flag identification",
        "Good use of safety-netting and urgent referral criteria",
        "Clear explanation to patient about next steps and investigations",
      ],
      improvements: [
        "Mention specific imaging choices (CT urogram vs ultrasound) by context",
        "Discuss the role of urine culture before further testing",
      ],
    },

    {
      id: "4",
      name: "Renal Mass",
      category: "Outpatient Stations",
      completed: true,
      grade: "Pass",
      coverage: [
        "History focusing on hematuria, pain, constitutional symptoms",
        "Investigations: CT TAP/renal phase imaging, ultrasound, biopsy indications",
        "Staging basics and perioperative considerations",
        "Counseling on treatment options (partial vs radical nephrectomy, ablation)",
        "Long-term surveillance and oncology MDT involvement",
      ],
      strengths: [
        "Clear staging-focused history and red-flag recognition",
        "Appropriate escalation to imaging and MDT discussion",
        "Balanced explanation of treatment risks and benefits",
      ],
      improvements: [
        "Could reference specific guideline thresholds for biopsy vs imaging",
        "Include brief mention of renal function optimisation pre-op",
      ],
    },

    {
      id: "5",
      name: "AUR",
      category: "Emergency Station",
      completed: true,
      grade: "Pass",
      coverage: [
        "Assessment of acute urinary retention causes (obstruction, meds, neuro)",
        "Immediate management: catheterisation options and complications",
        "Analgesia and fluid balance monitoring",
        "Post-catheter plan: trial without catheter, alpha-blocker considerations",
        "When to admit vs discharge and red-flag monitoring",
      ],
      strengths: [
        "Prompt recognition and safe immediate management",
        "Good explanation of catheter options and likely next steps",
        "Included medication review and monitoring",
      ],
      improvements: [
        "Be explicit about catheter size/type choices and infection prevention",
        "Document plan for follow-up (who and when) more clearly",
      ],
    },

    {
      id: "6",
      name: "Renal Colic",
      category: "Emergency Station",
      completed: true,
      grade: "Pass",
      coverage: [
        "Characteristic pain history and red flags for sepsis/obstruction",
        "Analgesia ladder and anti-emetic options",
        "Point-of-care urine testing and indications for CT KUB",
        "Criteria for urology referral and indications for decompression",
        "Stone prevention advice and metabolic workup basics",
      ],
      strengths: [
        "Excellent pain assessment and timely analgesia",
        "Good recognition of red flags requiring urgent imaging",
        "Clear discharge advice on when to return",
      ],
      improvements: [
        "Mention stone prevention measures (diet, hydration) briefly",
        "Discuss typical imaging sequence and radiation considerations",
      ],
    },

    {
      id: "7",
      name: "Haematuria (Emergency)",
      category: "Emergency Station",
      completed: true,
      grade: "Pass",
      coverage: [
        "Acute management of gross haematuria and clot retention",
        "Use of bladder irrigation and when to escalate",
        "Stabilisation, transfusion thresholds and sepsis screening",
        "Urgent urology involvement criteria and admission indications",
      ],
      strengths: [
        "Timely recognition of clot retention and escalation plan",
        "Good communication with teams and safety-focused actions",
      ],
      improvements: [
        "Should articulate clear stepwise bladder irrigation technique",
        "Add specifics on transfusion thresholds and monitoring plans",
      ],
    },
  ];
  const categories = Array.from(new Set(dataSet.map((data) => data.category)));
  return (
    <div className="flex gap-6 h-[calc(100vh-280px)]">
      <div className="w-80 flex-shrink-0">
        <Card className="p-4 h-full overflow-auto">
          <h1>Urology Interview</h1>
          <div className="space-y-6">
            {categories.map((category) => (
              <div>
                <h2 className="text-sm font-semibold">{category}</h2>
                <div className="mt-2 flex flex-col gap-1">
                  {dataSet
                    .filter((data) => data.category === category)
                    .map((dataInd) => (
                      <Button
                        onClick={() => setSelectedTopic(dataInd)}
                        className={`w-full justify-start gap-2 ${
                          selectedTopic.name === dataInd.name
                            ? "bg-black text-white"
                            : dataInd.completed
                            ? "bg-green-100 hover:bg-green-100"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {dataInd.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Circle className="h-4 w-4 text-gray-600" />
                        )}
                        {dataInd.name}
                      </Button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
