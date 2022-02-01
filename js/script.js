

console.log('JS OK', Vue);
dayjs("MM-DD-YYYY");
const app = new Vue({
    el:'#root',
    data:{
      currentIndex: 0,
      newMessage:'',
      user: {
        name: 'Nome Utente',
        avatar: '_io'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received',
          }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent',
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received',
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
          }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
          }
          ],
        },
      ],
        
    },
    methods:{
      getChat(index){
         this.currentIndex = index;
      },
      classClicked(index){
        return index === this.currentIndex  ? 'clicked-chat': ''; 
    },

      getCurrentName(index){
        return (this.currentIndex === index);
      },

      getStatus(index){
        if(this.contacts[this.currentIndex].messages[index].status === 'sent'){
          return 'sended-message offset-8'
        }else{
          return 'received-message';

        };
      },
      newMessages(){
        const newMessage = this.newMessage.trim();
        if(newMessage){
          this.contacts[this.currentIndex].messages.push({
            date: '10/01/2020 15:30:55',
            text: newMessage,
            status: 'sent'
          });
          this.newMessage='';
        };
        
      }
    },
})
