<template>
    <div class="container page">
        <div class="image-container container--size">
            <figure class="container__image">
                <img class="container__image--floatyman" src="./../assets/floatyman.svg" alt="Floating astronaut image">
            </figure>
        </div><!-- Image container end -->
        <div class="content-container content-container--background container--size">
            <div class="container-title">
                <h1>Latest SpaceX Launch</h1>
                <h2 class="sub-header">Information about the latest SpaceX launch here.</h2>
            </div><!-- Title box end -->
            <div class="table-container">
                <table class="table">
                    <tr class="table__row">
                        <th class="table__header ">Title</th>
                        <th class="table__header">Data</th>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Flight Number:</td>
                        <td class="table__cell">{{ flightNumber }}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Mission Name:</td>
                        <td class="table__cell">{{ missionName }}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Launch Date:</td>
                        <td class="table__cell">{{ launchDate }}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Rocket Name:</td>
                        <td class="table__cell">{{ rocketName }}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Payload Type:</td>
                        <td class="table__cell">{{ payloadType }}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Payload Mass:</td>
                        <td class="table__cell">{{ payloadMass }} kg</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__cell bold-text">Video Link:</td>
                        <td class="table__cell"><a :href="videoLink" target="_blank"><img class="table__icon" src="./../assets/icons/youtube-arrow.svg" alt="youtube icon"></a></td>
                    </tr>
                </table> <!-- Table end -->
                <span>
                    <p class="table__info"><span class="bold-text">Details: </span>{{ details }}</p>
                </span>
            </div><!-- Table container end -->
        </div><!-- Content container end -->
    </div> <!-- Main container end -->
</template>

<script>
export default {
    name: 'LatestLaunchComponent',
    props: [
        'flightNumber',
        'missionName',
        'launchDate',
        'rocketName',
        'payloadType',
        'payloadMass',
        'videoLink',
        'details'
        ]
}
</script>