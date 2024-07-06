import PropTypes from "prop-types";
import { Text, Textarea } from "@chakra-ui/react";

const Questions = ({ questions = [] }) => {
  return (
    <>
      {questions.map((e, i) => {
        return (
          <div key={i}>
            <Text mb="8px" px={4}>
              Q-{i + 1} {e.question}
            </Text>
            <div className="px-3 py-1 pb-3">
              <Textarea
                placeholder="Write answer here !!!!!!"
                name={`question-${i + 1}`}
                // value={"ASbdjgasd"}
                style={{
                  height: "40px",
                  lineHeight: "20px",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

Questions.propTypes = {
  questions: PropTypes.array,
  invalids: PropTypes.array,
};

export default Questions;
