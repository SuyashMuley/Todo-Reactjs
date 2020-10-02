const { default: TaskDetail } = require("./task-detail");

const TextBox = () => {
  const arr = [
    {
      id: 1,
      task: "do this",
    },

    {
      id: 2,
      task: "do this",
    },
  ];
  return (
    <>
      <div>
        {arr.map((task) => {
          <TaskDetail key={task.id} task={task.task} />;
        })}
      </div>
    </>
  );
};

export default TextBox;
