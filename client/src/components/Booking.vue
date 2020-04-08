<template lang="html">
  <div class="booking">
    <h2>{{ booking.name }}</h2>
    <p>email: {{ booking.email }}</p>
    <p>Check in status: {{ booking.checkedIn }}</p>
	<button v-if="!booking.checkedIn" v-on:click="handleUpdate">Check In</button>
    <button v-on:click="handleDelete">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '@/services/BookingService';
import { eventBus } from '@/main.js';

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete(){
		BookingService.deleteBooking(this.booking._id)
        .then(response => eventBus.$emit('booking-deleted', this.booking._id));
	},
	handleUpdate(){
		// bookingCheckIn(this.booking)
		const bookingDetails = {
			name: this.booking.name,
			email: this.booking.email,
			checkedIn: true
		}
		BookingService.updateBooking(this.booking._id, bookingDetails)
        .then(response => eventBus.$emit('booking-updated', this.booking._id, bookingDetails));
		// console.log(this.booking)
	}
  },
//     computed:{
// 	  bookingCheckIn: function(booking) {
// 			return booking.checkedIn = true
// 	  }
//   }
}
</script>

<style lang="css" scoped>
.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}

h2 {
	padding: 0;
	margin: 0;
} 
</style>
