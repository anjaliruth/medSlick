import { Syringe } from "lucide-react";
import { Syllabus } from "./Syllabus";
import { Card } from "./ui/card";
import InterviewImage from "./../media/interview.png"
 export function InterviewTab({ selectedTopic, setSelectedTopic }) {
  return (
    <div className="flex gap-6 h-[calc(100vh-280px)]">
      <Syllabus
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <div className="flex gap-6 h-[calc(100vh-280px)]">
        {/* <div className="w-80 flex-shrink-0"> */}
        <Card className="p-4 h-full overflow-auto">
          Interview section
          <div className="mb-6">
            <h2 className="text-2xl mb-2">{selectedTopic.name}</h2>
            <p className="text-gray-600">{selectedTopic.category}</p>
            <img alt="interview-pic" className="rounded-xl" src={InterviewImage}/>
          </div>
        </Card>
        {/* </div> */}
      </div>
    </div>
  );
}
