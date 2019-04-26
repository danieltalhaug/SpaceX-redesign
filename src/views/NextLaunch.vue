<template>
        <NextLaunchComponent  v-bind:flightNumber="nextApi.flight_number"
                                v-bind:missionName="nextApi.mission_name"
                                v-bind:launchDate="nextApi.launch_date_utc"
                                v-bind:rocketName="nextApi.rocket.rocket_name"
                                v-bind:payloadType="nextApi.rocket.second_stage.payloads[0].payload_type"
                                v-bind:payloadMass="nextApi.rocket.second_stage.payloads[0].payload_mass_kg"
                                v-bind:details="nextApi.details"
        ></NextLaunchComponent>
</template>
<script>
// imports
import NextLaunchComponent from './../components/NextLaunchComponent.vue'

export default {
    name: 'NextLaunch',
    components: {
        NextLaunchComponent
    },
    data: function() {
        return {
            nextApi: []
        }
    },
    beforeMount: function() {
        const app = this;
        const corsUrl = 'https://cors-anywhere.herokuapp.com/';
        const latestApi = 'https://api.spacexdata.com/v2/launches/next';

        fetch(corsUrl + latestApi)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            app.nextApi = result;
        })
    }
}
</script>

<style lang="scss">

</style>