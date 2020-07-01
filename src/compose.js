const MessageStore = require("./message_store");

const Compose = {
  render: function () {
    const div = document.createElement("div");
    div.className = "new-message";
    div.innerHTML = this.renderForm();

    div.addEventListener("change", (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        MessageStore.updateDraftField(field, value);
    });

    div.addEventListener("submit", (event) => {
        event.preventDefault();
        MessageStore.sendDraft();
        window.location.hash = "#inbox";
    });

    return div;
  },

  renderForm: function (msg) {
    const draft = MessageStore.getMessageDraft();
    const content = `
        <form class="compose-form">
            <input placeholder="Recipient"
                name="to"
                type="text"
                value=${draft.to}>
            <input placeholder="Subject"
                name="to"
                type="text"
                value=${draft.subject}>
            <textarea name="body" rows=20>${draft.body}</textarea>
            <button type="submit"
                class="btn btn-primary submit-message">
                Send
            </button>
        </form>
    `;
    return content;
  }
};

module.exports = Compose;