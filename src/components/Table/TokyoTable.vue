<template>
  <div class="table-responsive">
      <table class="table" :class="[{'table-hover':hover}, {'table-striped':striped}, {'table-bordered':bordered},{'table-borderless':borderless}, tableClass, tableClasses]">
        <thead :class="theadClasses">
            <tr>
                <slot name="columns" :columns="columns">
                <th v-for="column in columns" :key="column">{{ column }}</th>
                </slot>
            </tr>
        </thead>
        <tbody :class="tbodyClasses">
            <slot />
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "base-table",
  props: {
    hover: {
        type: Boolean,
        required: false,
    },
    striped: {
        type: Boolean,
        required: false,
    },
    bordered: {
        type: Boolean,
        required: false
    },
    borderless: {
        type: Boolean,
        required: false,
    },
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns",
    },
    data: {
      type: Array,
      default: () => [],
      description: "Table data",
    },
    type: {
      type: String, // striped | hover
      default: "",
      description: "Whether table is striped or hover type",
    },
    theadClasses: {
      type: String,
      default: "",
      description: "<thead> css classes",
    },
    tbodyClasses: {
      type: String,
      default: "",
      description: "<tbody> css classes",
    },
    tableClasses: {
      type: String
    }
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    },
    colsWithValue() {
      return (row) => {
        return this.columns.filter((column) => this.hasValue(row, column));
      };
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>

<style>

</style>