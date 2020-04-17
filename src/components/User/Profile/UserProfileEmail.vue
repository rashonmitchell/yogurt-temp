<template>
<div class="profile mt-3 mb-3">
    <b-container class="bv-example-row">
        <UserSettingsHeader :user="user" />

        <b-row>
            <UserSettingsMenu/>
            <b-col cols="8" class="tab-content" id="myTabContent">
                <b-card 
                    id="nav-email-tab" 
                    title="Edit Email" 
                    align="left">

                    <b-form-group
                        label="Current Email Address"
                        label-for="email"
                    >
                    <b-form-input id="email"></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="New Email Address"
                        label-for="email"
                    >
                    <b-form-input id="email"></b-form-input>
                    </b-form-group>
                    
                    <b-link href="#" class="card-link btn btn-outline-success">Update Email</b-link>
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
    name: 'UserProfileEmail',
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
