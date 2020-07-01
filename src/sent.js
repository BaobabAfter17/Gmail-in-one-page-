const MessageStore = require("./message_store");

let Sent = {
  render: function () {
    const ul = document.createElement("ul");
    ul.className = "messages";
    const sentMessages = MessageStore.getSentMessages();
    sentMessages.forEach((msg) => {
      ul.appendChild(this.renderMessage(msg));
    });
    return ul;
  },

  renderMessage: function (msg) {
    const msgLi = document.createElement("li");
    msgLi.className = "messages";
    msgLi.innerHTML = `
            <span class="to">To: ${msg.to}</span><br />
            <span class="subject">subject: ${msg.subject}</span><br />
            <span class="body">body: ${msg.body}</span>
        `;
    return msgLi;
  },
};

module.exports = Sent;
