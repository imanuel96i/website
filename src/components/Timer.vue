<template>
  <div class="countdown">
    <label 
      class="time-unite created"
      v-if="years!=0"
      >
      Years: {{years}}&nbsp;
    </label>
    <label 
      class="time-unite created"
      v-if="months!=0"
      >
      Months: {{months}}&nbsp;
    </label>
    <label 
      class="time-unite created"
      v-if="days!=0"
      >
      Days: {{days}}
    </label>
    <label class="time-unite created">&nbsp;---&nbsp;</label>
    <label 
      class="time-unite created"
      >
      {{hours}}:
    </label>
    <label 
      class="time-unite created"
      >
      {{minutes}}:
    </label>
    <label 
      class="time-unite created"
      >
      {{seconds}}
    </label>
    <v-container>
      <v-row>
        <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="years"
          >
            <p class="time-unite-title"
            v-if="years!=0">Years</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="months"
          >
            <p class="time-unite-title" 
            v-if="months!=0">Month</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="days"
          >
            <p class="time-unite-title" 
            v-if="days!=0">Days</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="hours"
          >
            <p class="time-unite-title">Hours</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="minutes"
          >
            <p class="time-unite-title">Minutes</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="seconds"
          >
            <p class="time-unite-title">Seconds</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="years"
          >
            <p class="time-unite-value" v-if="years!=0">{{years}}</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="months"
          >
            <p class="time-unite-value" v-if="months!=0">{{months}}</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="days"
          >
            <p class="time-unite-value" v-if="days!=0">{{days}}</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="hours"
          >
            <p class="time-unite-value">{{hours}}</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="minutes"
          >
            <p class="time-unite-value">{{minutes}}</p>
          </v-col>
          <v-col
            class="d-flex child-flex time-unite created"
            cols="6"
            sm="2"
            v-show="seconds"
          >
            <p class="time-unite-value">{{seconds}}</p>
          </v-col>
        </v-row>
    </v-container>
  </div>
  
</template>

<script>
import moment from 'moment'
import momenttz from 'moment-timezone'
  export default {
    name: 'Timer',

		data() {
			return {
				actualTime: momenttz().tz('America/Los_Angeles').format('X'),
				years: 0,
				months: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		},
		methods: {
      addOneSecondToActualTimeEverySecond(){
        var component = this
          component.actualTime = momenttz().tz('America/Los_Angeles').format('X')
        setTimeout(function(){component.addOneSecondToActualTimeEverySecond()}, 1000);
      },
      getDiffInSeconds () {
        return momenttz("2022-08-11 00:00:00").tz('America/Santiago').format('X') - this.actualTime
      },
      compute () {
        var duration = moment.duration(this.getDiffInSeconds(), "seconds")
        this.years = duration.years() > 0 ? duration.years() : 0
        this.months = duration.months() > 0 ? duration.months() : 0
        this.days = duration.days() > 0 ? duration.days() : 0
        this.hours = duration.hours() > 0 ? duration.hours() : 0
        this.minutes = duration.minutes() > 0 ? duration.minutes() : 0
        this.seconds = duration.seconds() > 0 ? duration.seconds() : 0
      }
		},
		created () {
      this.compute()
      this.addOneSecondToActualTimeEverySecond()
		},
		watch: {
      actualTime () {
          this.compute()
      }
		}
	}
</script>
