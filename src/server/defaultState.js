export const defaultState = {
  users: [{
    id: "U1",
    name: "Dev"
  },{
    id: "U2",
    name: "Barbara"
  },{
    id: "U3",
    name: "Ken"
  }],
  groups: [{
      name: "To Do",
      id: "G1",
      owner: "U1"
    },{
      name: "In Progress",
      id: "G2",
      owner: "U2"
    },{
      name: "Completed",
      id: "G3",
      owner: "U1"
    }
  ],
  tasks: [{
    name: "Do Tests",
    id: "T1",
    group: "G1",
    owner: "U1",
    isCompleted: false
  },{
    name: "Try out Redux",
    id: "T2",
    group: "G1",
    owner: "U2",
    isCompleted: false
  },{
    name: "Watch the Video",
    id: "T3",
    group: "G3",
    owner: "U1",
    isCompleted: true
  }
],
  comments: [{
    owner: "U1",
    id: "C1",
    task: "T1",
    content: "Great stuff bro"
  }]
}