export const permissions =[
    {
        role: "user",
        actions: [
            "get_profile",
            "update_profile",
            "add_habit",
            "update_habit",
            "get_one_habit",
            "get_habits",
            "get_one_todo",
            "get_todos",
            "add_todo",
            "update_todo"
        ]
    },
    {
        role: "admin",
        actions: [
            "get_profile",
            "update_profile",
            "add_habit",
            "update_habit",
            "get_one_habit",
            "get_habits",
            "get_one_todo",
            "get_todos",
            "add_todo",
            "update_todo",
            "delete_habit",
            "delete_todo"
        ]
    }
]