import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: ['meetup'],

  template: `
    <div>

      <!-- Обложка митапа -->
      <MeetupCover :title="meetup.title" :image="meetup.image" />
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
             <MeetupDescription :description="meetup.description" />

            <h2>Программа</h2>

            <!-- Программа митапа -->
             <MeetupAgenda :agenda="meetup.agenda" v-if="meetup.agenda?.length"/>
            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <UiAlert v-else="true">Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->

            <div class="meetup__aside-buttons"><MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" /></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
