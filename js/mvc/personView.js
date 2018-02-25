var PersonView = function (model) {
    this.model = model;
    this.addPersonEvent = new Event(this);
    this.selectPersonEvent = new Event(this);


    this.init();
};

PersonView.prototype = {

    init: function () {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {

        this.$container = $('.list-container');
        this.$addPersonButton = this.$container.find('.add-button');
        this.$personTextBox = this.$container.find('.person-text');
        this.$personContainer = this.$container.find('.person-container');

        return this;
    },

    setupHandlers: function () {

        this.addPersonButtonHandler = this.addPersonButton.bind(this);

        this.addPersonHandler = this.addPerson.bind(this);
        this.clearPersonTextBoxHandler = this.clearPersonTextBox.bind(this);

        return this;
    },

    enable: function () {

        this.$addPersonButton.click(this.addPersonButtonHandler);

        this.model.addPersonEvent.attach(this.addPersonHandler);
        this.model.addPersonEvent.attach(this.clearPersonTextBoxHandler);

        return this;
    },

    addPersonButton: function () {
        this.addPersonEvent.notify({
            person: this.$personTextBox.val()
        });
    },

    show: function () {
        this.buildList();
    },

    buildList: function () {
        var persons = this.model.getPerson();
        var html = "";
        var $personContainer = this.$personContainer;

        $personContainer.html('');

        var index = 0;
        for (var person in persons) {
            $personContainer.append(html + "<li>" + persons[person].personName + "</li></div>");
            index++;
        }

    },

    clearPersonTextBox: function () {
        this.$personTextBox.val('');
    },

    addPerson: function () {
        this.show();
    }

};
