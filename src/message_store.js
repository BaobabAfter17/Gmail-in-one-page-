let messages = {
  sent: [
    {
      to: "harrypotter@hogwarts.edu.com",
      subject: "You booklist for the coming semester!",
      body: "History of Magic by Bathilda Bagshot"
    },
    {
      to: "ronwesley@hogwarts.edu.com",
      subject: "Wanna join the Quidditch team?",
      body: "Come to the court for training next Saturday morning at 9:00."
    },
  ],
  inbox: [
    {
        from: "gellertgrindelward@durmstrang.edu.com",
        subject: "How are you doing?",
        body: "Missing you, my old friend. Love."
    },
    {
        from: "severussnape@hogwarts.edu.com",
        subject: "What's next step against the Dark Lord?",
        body: "Really? Beat him with a cookie?"
    }
  ]
};

let MessageStore = {
    getInboxMessages: function() {
        return messages.inbox;
    },

    getSentMessages: function() {
        return messages.sent;
    }
};

module.exports = MessageStore;