const MESSAGES_KEY = 'CORONA_ANNOUNCEMENTS';
const localStorage = window.localStorage;

const date1 = new Date().toString();
const date2 = new Date().toString();

const initialData = [{
    date: date1,
    time: date1,
    text: 'some text 1',
    notificationType: 'do_not_repeat'
},
{
    date: date2,
    time: date2,
    text: 'some text 2',
    notificationType: 'do_not_repeat'
}];

//Initlalize with dummy data
const messagesText = localStorage.getItem(MESSAGES_KEY);
if (!messagesText) {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(initialData));
}

export default {
    getMessages: () => {
      const data = JSON.parse(window.localStorage.getItem(MESSAGES_KEY));
      return data.map(({ date, time, text, notificationType }) => ({
            notificationType,
            text,
            date: new Date(date),
            time: new Date(time)
        }));  
    },
    saveMessage: function(message) {
        console.log('this');
        console.log(this);
        const messages = this.getMessages();
        messages.push(message);
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
        return true;
    }
}