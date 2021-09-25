<template>
    <div>
    <div class="row mb-3">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    Table View
                </div>
                <div class="card-body">
                    Using the most basic table up, here’s how .table-based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of bootstrap tables.
                </div>
                <tokyo-table :data="users">
                    <template v-slot:columns>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Published</th>
                    </template>
                    <template v-slot:default>
                        <tr v-for="(user,index) in users" :key="user">
                            <td type="index">
                                {{index+1}}
                            </td>
                            <td class="nama">
                                {{user.name}}
                            </td>
                            <td class="email">
                                {{user.email}}
                            </td>
                            <td class="published">
                                {{user.published}}
                            </td>
                        </tr>
                    </template>
                </tokyo-table>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header">
                    Table View
                </div>
                <div class="card-body">
                    Using the most basic table up, here’s how .table-based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of bootstrap tables.
                </div>
                <tokyo-table :data="users" theadClasses="thead-light" hover>
                    <template v-slot:columns>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Published</th>
                    </template>
                    <template v-slot:default>
                        <tr v-for="(user,index) in users" :key="user">
                            <td type="index">
                                {{index+1}}
                            </td>
                            <td class="nama">
                                {{user.name}}
                            </td>
                            <td class="email">
                                {{user.email}}
                            </td>
                            <td class="published">
                                {{user.published}}
                            </td>
                        </tr>
                    </template>
                </tokyo-table>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    Dark Table
                </div>
                <tokyo-table :data="users" type="dark">
                    <template v-slot:columns>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Published</th>
                    </template>
                    <template v-slot:default>
                        <tr v-for="(user,index) in users" :key="user">
                            <td type="index">
                                {{index+1}}
                            </td>
                            <td class="nama">
                                {{user.name}}
                            </td>
                            <td class="email">
                                {{user.email}}
                            </td>
                            <td class="published">
                                {{user.published}}
                            </td>
                        </tr>
                    </template>
                </tokyo-table>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import users from './json_file/user'
export default {
    data() {
        return {
            users,
            index: 0
        }
    },
    computed: {
        itemsWithSno() {
            return this.desserts.map((d, index) => ({ ...d, sno: index + 1 }))
        },
    },
    methods: {
        indexMethod(index) {
            return index * 2;
        }
    }
}
</script>

<style>

</style>