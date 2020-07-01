const MessageStore = require("./message_store");

const Compose = {
  render: function () {
    const div = document.createElement("div");
    div.className = "new-message";
    div.innerHTML = this.renderForm();
    return div;
  },

  renderForm: function (msg) {
    const draft = MessageStore.getMessageDraft();
    const content = `
        <form class="compose-form">
            <input placeholder="Recipient",
                name="to",
                type="text",
                value=${draft.to}>
            <textarea name="body", row=20>${draft.body}</textarea>
            <button type="submit",
                class="btn btn-primary submit-message">
                Send
            </button>
        </form>
    `;
    return content;
  }
};

module.exports = Compose;