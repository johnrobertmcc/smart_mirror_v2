const { Calendar, Weather, Budget, Citizen } = require('components');

export const AUTHENTICATED_WIDGETS = [Weather, Calendar, Budget, Citizen];

export const UNAUTHENTICATED_WIDGETS = [Weather, Calendar, null, Citizen];
