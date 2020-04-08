<template lang="html">
	<div id="bookingsGrid">
		<booking v-for="booking in bookings" :booking="booking" />
	</div>
</template>

<script>
import Booking from './Booking.vue';
import BookingService from '../services/BookingService.js';
import { eventBus } from '../main.js';

export default {
	name: "bookings-grid",
	data () {
        return {
         bookings: []
        }
    },
	components: {
		'booking': Booking
	},
	mounted(){
        this.fetchData();
        
	    eventBus.$on('booking-added', (booking) => {
            this.bookings.push(booking)
        }),
        
	    eventBus.$on('booking-deleted', (id)=>{
		    const index= this.bookings.findIndex(booking => booking._id === id)
		    this.bookings.splice(index,1);
	    })
    },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }

}
</script>

<style lang="css" scoped>
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}


</style>
