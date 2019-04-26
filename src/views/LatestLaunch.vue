<template>
        <LatestLaunchComponent  v-bind:flightNumber="latestApi.flight_number"
                                v-bind:missionName="latestApi.mission_name"
                                v-bind:launchDate="latestApi.launch_date_utc"
                                v-bind:rocketName="latestApi.rocket.rocket_name"
                                v-bind:payloadType="latestApi.rocket.second_stage.payloads[0].payload_type"
                                v-bind:payloadMass="latestApi.rocket.second_stage.payloads[0].payload_mass_kg"
                                v-bind:videoLink="latestApi.links.video_link"
                                v-bind:details="latestApi.details"
        ></LatestLaunchComponent>
</template>
<script>
// imports
import LatestLaunchComponent from './../components/LatestLaunchComponent.vue'

export default {
    name: 'LatestLaunch',
    components: {
        LatestLaunchComponent
    },
    data: function() {
        return {
            latestApi: []
        }
    },
    beforeMount: function() {
        const app = this;
        const corsUrl = 'https://cors-anywhere.herokuapp.com/';
        const latestApi = 'https://api.spacexdata.com/v2/launches/latest';

        fetch(corsUrl + latestApi)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            app.latestApi = result;
        })
    }
}
</script>

<style lang="scss">

</style>