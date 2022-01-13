pragma solidity ^0.5.0;

contract TodoList {
    uint public TaskCount =0 ;

    struct Task{
        uint id ;
        string content ;
        bool completed ;
    }
    mapping (uint => Task) public task;
    event TaskCreated(
        uint id ,
        string content ,
        bool completed
    );
    event TaskCompleted(
        uint id ,
        bool completed
    );
    constructor() public {
        createTask("Check out dapp university.com");
    }
    function createTask(string memory _content) public {
        taskCount ++;
        tasks[TaskCount] = Task(TaskCount , _content , false);
        emit TaskCreated(id, content, completed);

    }
}

