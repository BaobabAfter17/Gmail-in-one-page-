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


function Message(from, to, subject, body) {
  this.from = from;
  this.to = to;
  this.subject = subject;
  this.body = body;
}

let messageDraft = new Message();

const MessageStore = {
    getInboxMessages: function() {
        return messages.inbox;
    },

    getSentMessages: function() {
        return messages.sent;
    },

    getMessageDraft: function() {
      return messageDraft;
    },

    updateDraftField: function(field, value) {
      messageDraft[field] = value;
    },

    sendDraft: function() {
      messages.inbox.push(messageDraft);
      messageDraft = new Message();
    }
};

module.exports = MessageStore;

// test