use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {name: "sam", email: "s@s.com", checkedIn: false},
    {name: "sara", email: "s@c.com", checkedIn: false},
    {name: "michael", email: "m@d.com", checkedIn: false}
]);
