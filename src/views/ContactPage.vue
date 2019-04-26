<template>
    <div class="container page">
        <div class="image-container container--size">
            <figure class="container__image">
                <img class="container__image--moon" src="./../assets/moon.svg" alt="White moon image">
            </figure>
        </div><!-- Image container end -->
        <div class="content-container content-container--background container--size">
            <div class="container-title">
                <h1>Got something on your mind?</h1>
                <h2 class="sub-header">Ask us anything, we will reply as soon as possible.</h2>
            </div><!-- Title box end -->
            <div class="table-container">
				<form class="form" @submit.prevent="onSubmit">
					<label for="fname" class="form__label">First Name</label>
					<input type="text" id="fname" class="form__input form--radius" v-model.lazy.trim="$v.formResponses.name.$model" placeholder="Starman" />
                    <p class="error" v-if="!$v.formResponses.name.required">Please enter your first name</p>
                    <p class="error" v-if="!$v.formResponses.name.minLength">Field must have at least {{ $v.formResponses.name.$params.minLength.min }} characters.</p>

					<label class="form__label">Email</label>
					<input class="form__input form--radius" type="email" id="email" v-model.lazy.trim="$v.formResponses.email.$model" placeholder="starman@spacex.com" />
                    <p class="error" v-if="!$v.formResponses.email.required">Please a valid email address</p>

					<label class="form__label">Message</label>
					<textarea class="form__textarea form--radius" type="text" id="textField" v-model.lazy.trim="$v.formResponses.message.$model" placeholder="Hello, I have a question!"></textarea>
                    <p class="error" v-if="!$v.formResponses.message.required">Please write your question</p>

                    <button type="submit" class="button form--radius">Submit</button>
				</form>
            </div><!-- Table container end -->
        </div><!-- Content container end -->
    </div> <!-- Main container end -->
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'ContactPage',
    data() {
        return {
            formResponses: {
                name: '',
                email: '',
                message: '',
            }
        }
    },
    validations: {
        formResponses: {
            name: {
                required,
                minLength: minLength(2),
            },
            email: {
                required,
                email
            },
            message: {
                required
            }
        }
    }
}
</script>
<style lang="scss">
</style>
