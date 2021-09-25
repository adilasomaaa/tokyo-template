<template>
<div>
    <div class="row">
        <div class="col">
            <tokyo-card header="Overview">
                <p>
                    to use this component in your template you can typing <code>tokyo-pagination</code> to use it. and after that add the props to customize in your data.
                </p>
                <tokyo-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    total="5"
                />
            </tokyo-card>        
        </div>
    </div>
    <div class="row">
        <div class="col">
            <tokyo-card class="mt-3" header="Align Pagination">
                <p>
                    Use prop <code>align</code> to make a aligned pagination. You can use <code>start</code> to make pagination aligned to left, <code>center</code> to make pagination centered, and <code>end</code> to make pagination aligned to right.
                </p>
                <tokyo-pagination
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    total="5"
                />
                 <tokyo-pagination
                    align="start"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    total="5"
                />
                 <tokyo-pagination
                    align="end"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    total="5"
                />
            </tokyo-card>
            
        </div>
        <div class="col">
            <tokyo-card class="mt-3" header="Sizing Pagination">
                <p>
                    Use props <code>size</code> to define the sizing of the pagination. You can choose <code>sm</code> for the small pagination or <code>lg</code> to large pagination.
                </p>
                 <tokyo-pagination
                    size="sm"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    total="5"
                />
                <tokyo-pagination
                    size="lg"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    total="5"
                />
            </tokyo-card>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            rows: 100,
            perPage: 2,
            currentPage: 2
        }
    }
}
</script>

<style>

</style>