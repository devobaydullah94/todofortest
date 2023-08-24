const app = Vue.createApp({
    data() {
        return {
            tasks: [
                { id: 1, title: "Learn HTML From SoftBurgh"},
                { id: 2, title: "Learn CSS From SoftBurgh" },
                { id: 3, title: "Learn JS From SoftBurgh" },
            ],
            text: ""

        };
    },

    computed: {
        totalTasks() {
            return this.tasks.length;
        },
    },

    methods: {
        addtask() {
            if (this.text.trim() !== "") {
                this.tasks.push({ id: this.tasks.length + 1, title: this.text, editing: false });
            }
            
        },

        updateMessage(event) {
            this.text = event.target.value;
        },

        deleteTask(index) {
            const confirmDelete = window.confirm("Are you sure you want to delete this items?");
            if (confirmDelete) {
                this.tasks.splice(index, 1);
                this.saveTasksToCookies();
            }
        },
        
        toggleEdit(task) {
            task.editing = !task.editing;
        },

        saveEdit(task) {
            task.editing = false;
        },

        toggleChecked(task) {
            task.checked = !task.checked;
        },

    },

 
})
