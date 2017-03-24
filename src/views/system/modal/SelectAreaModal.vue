<script>
import SelectTreeModal from '../../../components/tree/SelectTreeModal'

export default {
  mixins: [SelectTreeModal],
  methods: {
    loadTree () {
      let actions = {
        getTree: {method: 'get', url: '/one/a/rest/sys/area/tree'}
      }
      let resource = this.$resource(null, {}, actions)
      resource.getTree().then(function (response) {
        this.topElement = response.body
      })
    }
  }
}
</script>
