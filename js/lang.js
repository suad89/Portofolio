$(function () {

    // Lets be professional, shall we?
    "use strict";

    // Some variables for later
    var dictionary, set_lang;

    // Object literal behaving as multi-dictionary
    dictionary = {
        "english": {
            "expertise": "Ekspertise",
            "mywork": "My Work",
			"contact": "Contact",
			"typing": "Hi, I am Suad Aščerić.", "I am Web Developer.", "And I am available now.", "Feel free to contact me."
        },
        "bosnian": {
            "expertise": "Ekspert za",
            "mywork": "Moji radovi",
			"contact": "Kontakt",
			"typing": "Hi, I am Suad Aščerić.", "I am Web Developer.", "And I am available now.", "Feel free to contact me."
        }
    };

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap languages when menu changes
    $("#lang").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
        }
    });

    // Set initial language to English
    set_lang(dictionary.english);

});