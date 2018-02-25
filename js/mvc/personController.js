
var PersonController = function (model, view) {
    this.model = model;
    this.view = view;
    this.model.loadSavedData();
    this.view.buildList();


    this.init();

};

PersonController.prototype = {

    init: function () {
        this.setupHandlers()
            .enable();

    },

    setupHandlers: function () {

        this.addPersonHandler = this.addPerson.bind(this);
        return this;
    },

    enable: function () {

        this.view.addPersonEvent.attach(this.addPersonHandler);
        return this;
    },

    addPerson: function (sender, args) {
        this.model.addPerson(args.person);
    }
    
};
