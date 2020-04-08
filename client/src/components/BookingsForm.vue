<template lang="html">
	<form id="bookings-form" v-on:submit="addBooking" method="post">
		<h2>Add a Booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" required />
		</div>
		<div class="formWrap">
			<label for="email">Email:</label>
			<input type="text" id="email" v-model="email" required />
		</div>

		<input class="button" type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import BookingService from '@/services/BookingService.js'
import { eventBus } from '@/main.js'

export default {
	name: 'bookings-form',
	data(){
		return {
			
			name: null,
			email: null,
			checkedIn: false

		}
	},
	methods: {
		addBooking(e){
    	e.preventDefault()
    	const booking = {
        	name: this.name,
			email: this.email,
			checkedIn: this.checkedIn
      	}
		BookingService.postBooking(booking)
		.then(res => eventBus.$emit('booking-added', res))
		}
	}
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}

.button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
