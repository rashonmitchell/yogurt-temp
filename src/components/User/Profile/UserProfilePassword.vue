<template>
<div class="profile mt-3 mb-3">
    <b-container class="bv-example-row">
        <UserSettingsHeader :user="user" />

        <b-row>
            <UserSettingsMenu/>
            <b-col cols="8" class="tab-content" id="myTabContent">
                <b-card 
                    v-bind:class="{ 'active show': (this.activeItem === 'nav-password-tab') }" 
                    id="nav-password-tab" 
                    title="Edit Password" 
                    align="left">
                    <b-form-group
                        label="Current Password"
                        label-for="current-password"
                    >
                        <b-form-input id="current-password"></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="New Password"
                        label-for="new-password"
                    >
                        <b-form-input id="new-password"></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="Confirm Password"
                        label-for="confirm-password"
                    >
                        <b-form-input id="confirm-password" ></b-form-input>
                    </b-form-group>
                    
                    <b-link href="#" class="card-link btn btn-outline-success">Update Password</b-link>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import UserSettingsHeader from '@/components/User/Settings/UserSettingsHeader'
import UserSettingsMenu from '@/components/User/Settings/UserSettingsMenu'
export default {
    name: 'UserProfilePassword',
    data:() => ({
        activeItem: 'nav-password-tab',
        isProfileEditMode: false,
    }),
    components: {
        UserSettingsHeader,
        UserSettingsMenu
    },
    props: ["user"]
}
</script>
<style lang="scss">
.form-control {
	// height: 27px;
  background-color: transparent;
	border: none;
  border-radius: 0;
	border-bottom: 2px solid #e6e6e6;
	width: 100%;
	color: #666;
	&:focus {
		border-color: #42b983;
	}
	&::-webkit-input-placeholder { 
		color: #999;
	}
	&::-moz-placeholder { 
		color: #999;
	}
	&:-ms-input-placeholder { 
		color: #999;
	}
	&:-moz-placeholder { 
		color: #999;
	}
}

.list-type {
  list-style-type: none;
}

select.form-control {
	-moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    color: #999;
    option[value=""][disabled] {
 		display: none;
    padding: 8px 0;
 	}
}
textarea.form-control {
	padding: 8px 0;
}

</style>
