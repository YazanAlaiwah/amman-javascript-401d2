const inquirer = require('inquirer');
const io = require('socket.io-client');
//connect to slick namespace
const slick = io.connect('http://localhost:3000/slick');

slick.on('connect', () => {
  const messages = [];
  let name = '';
  let activeInput = true;
  let channel = 'general';
  // emit join event that slick app in server is listining to
  slick.emit('join', channel);
  // getting the channel
  slick.on('joined', (joinedChannel) => {
    channel = joinedChannel;
    //TODO: get input
    getInput();
  });
  slick.on('message', (payload) => {
    console.clear();
    messages.push(payload);
    messages.forEach((message) => console.log(message));
    console.log('');
    //TODO: get input
    getInput();
  });

  async function getInput() {
    if (activeInput) {
      return;
    }
    activeInput = true;
    const response = await inquirer.prompt([
      {
        prefix: '',
        name: 'text',
        message: `----------------\n ${channel}`,
      },
    ]);

    // Join 401d2
    const command = response.text.toLowerCase().split(' ')[0];
    switch (command) {
      case 'quit':
        process.exit();
      case 'join':
        const room = response.text.toLowerCase().split(' ')[1];
        activeInput = false;
        slick.emit('join', room);
        break;
      default:
        activeInput = false;
        slick.emit('message', `[${name}]: ${response.text}`);
        getInput();
        break;
    }
  }
  async function getName() {
    console.clear();
    const input = await inquirer.prompt([
      { name: 'name', message: 'What is your name?' },
    ]);
    name = input.name;
    activeInput = false;
    getInput();
  }
  getName();
});
