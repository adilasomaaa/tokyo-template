<template>
  <div>
      <div class="row">
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      Example Card
                  </div>
                  <div class="card-body">
                      <p>
                          <code>tokyo-card</code> is alternative card you can use in this template. so they'll naturally fill the full width of its parent element. Or you can create it manually with <code>div.card</code>
                      </p>
                      <div class="row">
                          <div class="col" v-for="card in cards" :key="card">
                            <tokyo-card
                                :title="card.title"
                                :img="card.img"
                                :header="card.title"
                            >
                            <template v-slot:footer>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </template>
                                <p class="card-text">{{card.body}}</p>
                                
                            </tokyo-card>
                          </div>
                          
                      </div>
                        
                  </div>
              </div>
              <div class="card mt-3">
                  <div class="card-header">
                      Stats Card
                  </div>
                  <div class="card-body">
                      <p>
                          This card is customize to make a stats card and you can use this component with <code>stats-card</code>, you can assign the props like: <code>title, stats, icon</code>
                      </p>
                      <div class="row">
                          <div class="col" v-for="card in cards" :key="card">
                                <stats-card
                                    :title="card.title"
                                    :stats="card.stats"
                                    icon="fas fa-user"
                                    >
                                    <p class="mt-3 mb-0 text-sm">
                                        <span class="text-success mr-2"><i class="fa fa-user"></i> 3.48%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </stats-card>
                          </div>
                      </div>
                       
                  </div>
              </div>
              <div class="card mt-3">
                  <div class="card-header">
                      Another Stats Card
                  </div>
                  <div class="card-body">
                      <p>
                          This card is customize to make a stats card and you can use this component with <code>stats-card</code>, you can assign the props like: <code>title, stats, icon</code>
                      </p>
                      <div class="row">
                          <div class="col">
                            <a href="#">
                                <div style="width: 12rem;">
                                    <div class="card stats-card">
                                        <div class="card-body bg-primary">
                                            <div class="row">
                                                <div class="col">
                                                    <h1 class="card-title text-uppercase mb-0"><i class="far fa-user"></i></h1>
                                                </div>
                                            </div>
                                            <h5 class="mt-3 mb-0 text-sm">
                                                <span class="font-weight-bold">Transfer via Card Number</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </a>
                          </div>
                          <div class="col">
                            <div style="width: 12rem;">
                                <div class="card stats-card">
                                    <div class="card-body bg-success">
                                        <div class="row">
                                            <div class="col">
                                                <h1 class="card-title text-uppercase mb-0"><i class="far fa-user"></i></h1>
                                            </div>
                                        </div>
                                        <h5 class="mt-3 mb-0 text-sm">
                                            <span class="font-weight-bold">Transfer via Card Number</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div class="col">
                            <div style="width: 12rem;">
                                <div class="card stats-card">
                                    <div class="card-body bg-warning">
                                        <div class="row">
                                            <div class="col">
                                                <h1 class="card-title text-uppercase mb-0"><i class="far fa-user"></i></h1>
                                            </div>
                                        </div>
                                        <h5 class="mt-3 mb-0 text-sm">
                                            <span class="font-weight-bold">Transfer via Card Number</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div class="col">
                              <div style="width: 12rem;">
                                <div class="card stats-card">
                                    <div class="card-body bg-danger">
                                        <div class="row">
                                            <div class="col">
                                                <h1 class="card-title text-uppercase mb-0"><i class="far fa-user"></i></h1>
                                            </div>
                                        </div>
                                        <h5 class="mt-3 mb-0 text-sm">
                                            <span class="font-weight-bold">Transfer via Card Number</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>
                        
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import cards from '../json_file/card'
export default {
    data() {
        return {
            cards,
            footer: `<a href="#" class="btn btn-primary">Go somewhere</a>`
        }
    }

}
</script>

<style>

</style>