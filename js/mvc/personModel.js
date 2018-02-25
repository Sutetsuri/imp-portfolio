var PersonModel = function () {
    this.addPersonEvent = new Event(this);
};

PersonModel.prototype = {

    addPerson: function (person) {
        this.persons.push({
            personName: person

        });
        this.saveData();
        this.addPersonEvent.notify();
    },

    getPerson: function () {
        return this.persons;
    },

    saveData: function () {
        localStorage.setItem('persons', JSON.stringify(this.persons));
    },


    loadSavedData: function () {
        var savedPersons = localStorage.getItem('persons');
        if(savedPersons) {
            this.persons = JSON.parse(savedPersons);
        }
    }

};
