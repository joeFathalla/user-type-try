import * as actionsType from "../actions/actionsType";

const usersReducer = (
  state = {
    assignUsers: [],
    selectedProfile: {
      id: 2,
      name: "Office",
      users: [],
      isLocked: false
    },
    availableUsers: [
      {
        id: 1,
        name: "Yasmeen Maged"
      },
      {
        id: 2,
        name: "Raneem Taha"
      },
      {
        id: 3,
        name: "Salma Medhat"
      },
      {
        id: 4,
        name: "Mike Marlon"
      },
      {
        id: 5,
        name: "Randal Ronan"
      },
      {
        id: 6,
        name: "Justice Micheal"
      },
      {
        id: 7,
        name: "Ethen Blaise"
      },
      {
        id: 8,
        name: "Alden Leroy"
      },
      {
        id: 9,
        name: "Lebron Carsten"
      },
      {
        id: 10,
        name: "Dexter Talon"
      },
      {
        id: 11,
        name: "Godric Shay"
      },
      {
        id: 12,
        name: "Rodrigo Yuri"
      },
      {
        id: 13,
        name: "Jethro Nolan"
      },
      {
        id: 14,
        name: "Drew Shannon"
      },
      {
        id: 15,
        name: "Tony Bart"
      },
      {
        id: 16,
        name: "Bernard Branden"
      },
      {
        id: 17,
        name: "Boston Darren"
      },
      {
        id: 18,
        name: "Denver Keaton"
      },
      {
        id: 19,
        name: "Darwin Nigel"
      },
      {
        id: 20,
        name: "Skylar Roddy"
      }
    ],
    allUsers: [
      {
        id: 1,
        name: "Yasmeen Maged"
      },
      {
        id: 2,
        name: "Raneem Taha"
      },
      {
        id: 3,
        name: "Salma Medhat"
      },
      {
        id: 4,
        name: "Mike Marlon"
      },
      {
        id: 5,
        name: "Randal Ronan"
      },
      {
        id: 6,
        name: "Justice Micheal"
      },
      {
        id: 7,
        name: "Ethen Blaise"
      },
      {
        id: 8,
        name: "Alden Leroy"
      },
      {
        id: 9,
        name: "Lebron Carsten"
      },
      {
        id: 10,
        name: "Dexter Talon"
      },
      {
        id: 11,
        name: "Godric Shay"
      },
      {
        id: 12,
        name: "Rodrigo Yuri"
      },
      {
        id: 13,
        name: "Jethro Nolan"
      },
      {
        id: 14,
        name: "Drew Shannon"
      },
      {
        id: 15,
        name: "Tony Bart"
      },
      {
        id: 16,
        name: "Bernard Branden"
      },
      {
        id: 17,
        name: "Boston Darren"
      },
      {
        id: 18,
        name: "Denver Keaton"
      },
      {
        id: 19,
        name: "Darwin Nigel"
      },
      {
        id: 20,
        name: "Skylar Roddy"
      }
    ],
    profiles: [
      {
        id: 1,
        name: "Admins",
        users: [],
        isLocked: true
      },
      {
        id: 2,
        name: "Office",
        users: [],
        isLocked: false
      },
      {
        id: 3,
        name: "Managers",
        users: [],
        isLocked: false
      },
      {
        id: 4,
        name: "Head Office",
        users: [],
        isLocked: false
      },
      {
        id: 5,
        name: "Customer Service",
        users: [],
        isLocked: false
      },
      {
        id: 6,
        name: "Customer Service",
        users: [],
        isLocked: false
      },
      {
        id: 7,
        name: "Wealth Managment",
        users: [],
        isLocked: false
      },
      {
        id: 8,
        name: "IT",
        users: [],
        isLocked: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case actionsType.ADD_USER:
      let userAddArray = [...action.users];
      let availableUsers = [...state.availableUsers];
      userAddArray.map((user) => {
        let userIndex = availableUsers.findIndex((u) => u.id === user.id);
        availableUsers.splice(userIndex, 1);
      });
      return {
        ...state,
        assignUsers: state.assignUsers.concat(action.users),
        availableUsers: [...availableUsers]
      };
    case actionsType.REMOVE_USER:
      let userRemoveArray = [...action.users];
      let assignUsers = [...state.assignUsers];
      userRemoveArray.map((user) => {
        let userIndex = assignUsers.findIndex((u) => u.id === user.id);
        assignUsers.splice(userIndex, 1);
      });
      return {
        ...state,
        availableUsers: state.availableUsers.concat(action.users),
        assignUsers: [...assignUsers]
      };
    case actionsType.SELECT_PROFILE:
      let userSelectArray = [...action.profile.users];
      let availableUsersSelect = [...state.allUsers];
      userSelectArray.map((user) => {
        let userIndex = availableUsersSelect.findIndex((u) => u.id === user.id);
        availableUsersSelect.splice(userIndex, 1);
      });
      return {
        ...state,
        selectedProfile: action.profile,
        assignUsers: action.profile.users,
        availableUsers: availableUsersSelect
      };
    case actionsType.SAVE_PROFILE:
      let newProfile = { ...state.selectedProfile };
      newProfile.users = [...state.assignUsers];
      let allProfiles = [...state.profiles];
      allProfiles.map((profile) => {
        if (profile.id === newProfile.id) {
          profile.users = newProfile.users;
        }
      });
      return {
        ...state,
        selectedProfile: newProfile,
        profiles: allProfiles
      };
    default:
      return state;
  }
};

export default usersReducer;
