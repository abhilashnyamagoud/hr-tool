<template>
    <v-row justify="center">
        <v-sheet height="50" width="700">
            <v-toolbar
            flat
            >
                <v-btn
                    outlined
                    class="mr-4"
                    color="grey darken-2"
                    @click="setToday"
                >
                    Today
                </v-btn>
                <v-btn
                    fab
                    text
                    small
                    color="grey darken-2"
                    @click="prev"
                >
                    <v-icon small>
                        mdi-chevron-left
                    </v-icon>
                </v-btn>
                <v-btn
                    fab
                    text
                    small
                    color="grey darken-2"
                    @click="next"
                >
                    <v-icon small>
                        mdi-chevron-right
                    </v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                    {{ $refs.calendar.title }}
                </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu
                        bottom
                        right
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                outlined
                                color="grey darken-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <span>{{ typeToLabel[type] }}</span>
                                <v-icon right>
                                mdi-menu-down
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="type = 'day'">
                                <v-list-item-title>Day</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = 'week'">
                                <v-list-item-title>Week</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = 'month'">
                                <v-list-item-title>Month</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = '4day'">
                                <v-list-item-title>4 days</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-toolbar>
        </v-sheet>
        <v-sheet height="400" width="700">
            <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
            ></v-calendar>
            <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                offset-x
            >
                <v-card
                    color="grey lighten-4"
                    min-width="350px"
                    flat
                >
                    <v-toolbar
                    :color="selectedEvent.color"
                    dark
                    >
                        <v-btn icon>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <span v-html="selectedEvent.details"></span>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            color="secondary"
                            @click="selectedOpen = false"
                        >
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
        </v-sheet>
    </v-row>
</template>

<script>
import axios from "axios"
    export default {
        data: () => ({
            focus: '',
            type: 'month',
            typeToLabel: {
                month: 'Month',
                week: 'Week',
                day: 'Day',
                '4day': '4 Days',
            },
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            events: [],
        }),
        mounted () {
            this.getEvents()
            this.$refs.calendar.checkChange()
        },
        methods: {
            viewDay ({ date }) {
                this.focus = date
                this.type = 'day'
            },
            setToday () {
                this.focus = ''
            },
            prev () {
                this.$refs.calendar.prev()
            },
            next () {
                this.$refs.calendar.next()
            },
            addEvent () {
                
                
            },
            showEvent ({ nativeEvent, event }) {
                const open = () => {
                    this.selectedEvent = event
                    this.selectedElement = nativeEvent.target
                    requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
                }

                if (this.selectedOpen) {
                    this.selectedOpen = false
                        requestAnimationFrame(() => requestAnimationFrame(() => open()))
                    } else {
                    open()
                }
                nativeEvent.stopPropagation()
            },
            getEvents(){
                axios.get('http://localhost:3088/events/all')
                .then((res)=>{
                    const result=res.data
                    console.log(result)
                    this.events = result
                })
                .catch(err=>{
                    console.log(err.message)
                })
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>