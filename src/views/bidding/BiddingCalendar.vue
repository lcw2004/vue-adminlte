<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box box-primary">
        <div class="box-body no-padding">
          <!-- THE CALENDAR -->
          <div id="calendar" class="fc fc-ltr fc-unthemed">
            <div class="fc-toolbar">
              <div class="fc-left">
                <div class="fc-button-group"><button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left"><span class="fc-icon fc-icon-left-single-arrow"></span></button><button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right"><span class="fc-icon fc-icon-right-single-arrow"></span></button></div><button
                    type="button" class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled" disabled="disabled">today</button></div>
              <div class="fc-right">
                <div class="fc-button-group"><button type="button" class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">month</button><button type="button" class="fc-agendaWeek-button fc-button fc-state-default">week</button><button type="button" class="fc-agendaDay-button fc-button fc-state-default fc-corner-right">day</button></div>
              </div>
              <div class="fc-center">
                <h2>March 2017</h2></div>
              <div class="fc-clear"></div>
            </div>
            <div class="fc-view-container" style="">
              <div class="fc-view fc-month-view fc-basic-view">
                <table>
                  <thead>
                    <tr>
                      <td class="fc-widget-header">
                        <div class="fc-row fc-widget-header">
                          <table>
                            <thead>
                              <tr>
                                <th class="fc-day-header fc-widget-header fc-sun">Sun</th>
                                <th class="fc-day-header fc-widget-header fc-mon">Mon</th>
                                <th class="fc-day-header fc-widget-header fc-tue">Tue</th>
                                <th class="fc-day-header fc-widget-header fc-wed">Wed</th>
                                <th class="fc-day-header fc-widget-header fc-thu">Thu</th>
                                <th class="fc-day-header fc-widget-header fc-fri">Fri</th>
                                <th class="fc-day-header fc-widget-header fc-sat">Sat</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fc-widget-content">
                        <div class="fc-day-grid-container">
                          <div class="fc-day-grid">
                            <div class="fc-row fc-week fc-widget-content" style="height: 96px;">
                              <div class="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td class="fc-day fc-widget-content fc-sun fc-other-month fc-past" data-date="2017-02-26"></td>
                                      <td class="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2017-02-27"></td>
                                      <td class="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2017-02-28"></td>
                                      <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2017-03-01"></td>
                                      <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2017-03-02"></td>
                                      <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-03-03"></td>
                                      <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-03-04"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td class="fc-day-number fc-sun fc-other-month fc-past" data-date="2017-02-26">26</td>
                                      <td class="fc-day-number fc-mon fc-other-month fc-past" data-date="2017-02-27">27</td>
                                      <td class="fc-day-number fc-tue fc-other-month fc-past" data-date="2017-02-28">28</td>
                                      <td class="fc-day-number fc-wed fc-past" data-date="2017-03-01">1</td>
                                      <td class="fc-day-number fc-thu fc-past" data-date="2017-03-02">2</td>
                                      <td class="fc-day-number fc-fri fc-past" data-date="2017-03-03">3</td>
                                      <td class="fc-day-number fc-sat fc-past" data-date="2017-03-04">4</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td class="fc-event-container">
                                        <a class="fc-day-grid-event fc-event fc-start fc-end fc-draggable" style="background-color:#f56954;border-color:#f56954">
                                          <div class="fc-content"><span class="fc-time">12a</span> <span class="fc-title">All Day Event</span></div>
                                        </a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="fc-row fc-week fc-widget-content" style="height: 96px;">
                              <div class="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2017-03-05"></td>
                                      <td class="fc-day fc-widget-content fc-mon fc-past" data-date="2017-03-06"></td>
                                      <td class="fc-day fc-widget-content fc-tue fc-past" data-date="2017-03-07"></td>
                                      <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2017-03-08"></td>
                                      <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2017-03-09"></td>
                                      <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-03-10"></td>
                                      <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-03-11"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td class="fc-day-number fc-sun fc-past" data-date="2017-03-05">5</td>
                                      <td class="fc-day-number fc-mon fc-past" data-date="2017-03-06">6</td>
                                      <td class="fc-day-number fc-tue fc-past" data-date="2017-03-07">7</td>
                                      <td class="fc-day-number fc-wed fc-past" data-date="2017-03-08">8</td>
                                      <td class="fc-day-number fc-thu fc-past" data-date="2017-03-09">9</td>
                                      <td class="fc-day-number fc-fri fc-past" data-date="2017-03-10">10</td>
                                      <td class="fc-day-number fc-sat fc-past" data-date="2017-03-11">11</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td class="fc-event-container" colspan="3">
                                        <a class="fc-day-grid-event fc-event fc-start fc-end fc-draggable" style="background-color:#f39c12;border-color:#f39c12">
                                          <div class="fc-content"><span class="fc-time">12a</span> <span class="fc-title">Long Event</span></div>
                                        </a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="fc-row fc-week fc-widget-content" style="height: 96px;">
                              <div class="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td class="fc-day fc-widget-content fc-sun fc-today fc-state-highlight" data-date="2017-03-12"></td>
                                      <td class="fc-day fc-widget-content fc-mon fc-future" data-date="2017-03-13"></td>
                                      <td class="fc-day fc-widget-content fc-tue fc-future" data-date="2017-03-14"></td>
                                      <td class="fc-day fc-widget-content fc-wed fc-future" data-date="2017-03-15"></td>
                                      <td class="fc-day fc-widget-content fc-thu fc-future" data-date="2017-03-16"></td>
                                      <td class="fc-day fc-widget-content fc-fri fc-future" data-date="2017-03-17"></td>
                                      <td class="fc-day fc-widget-content fc-sat fc-future" data-date="2017-03-18"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td class="fc-day-number fc-sun fc-today fc-state-highlight" data-date="2017-03-12">12</td>
                                      <td class="fc-day-number fc-mon fc-future" data-date="2017-03-13">13</td>
                                      <td class="fc-day-number fc-tue fc-future" data-date="2017-03-14">14</td>
                                      <td class="fc-day-number fc-wed fc-future" data-date="2017-03-15">15</td>
                                      <td class="fc-day-number fc-thu fc-future" data-date="2017-03-16">16</td>
                                      <td class="fc-day-number fc-fri fc-future" data-date="2017-03-17">17</td>
                                      <td class="fc-day-number fc-sat fc-future" data-date="2017-03-18">18</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="fc-event-container">
                                        <a class="fc-day-grid-event fc-event fc-start fc-end fc-draggable" style="background-color:#0073b7;border-color:#0073b7">
                                          <div class="fc-content"><span class="fc-time">10:30a</span> <span class="fc-title">Meeting</span></div>
                                        </a>
                                      </td>
                                      <td class="fc-event-container" rowspan="2">
                                        <a class="fc-day-grid-event fc-event fc-start fc-end fc-draggable" style="background-color:#00a65a;border-color:#00a65a">
                                          <div class="fc-content"><span class="fc-time">7p</span> <span class="fc-title">Birthday Party</span></div>
                                        </a>
                                      </td>
                                      <td rowspan="2"></td>
                                      <td rowspan="2"></td>
                                      <td rowspan="2"></td>
                                      <td rowspan="2"></td>
                                      <td rowspan="2"></td>
                                    </tr>
                                    <tr>
                                      <td class="fc-event-container">
                                        <a class="fc-day-grid-event fc-event fc-start fc-end fc-draggable" style="background-color:#00c0ef;border-color:#00c0ef">
                                          <div class="fc-content"><span class="fc-time">12p</span> <span class="fc-title">Lunch</span></div>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="fc-row fc-week fc-widget-content" style="height: 96px;">
                              <div class="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td class="fc-day fc-widget-content fc-sun fc-future" data-date="2017-03-19"></td>
                                      <td class="fc-day fc-widget-content fc-mon fc-future" data-date="2017-03-20"></td>
                                      <td class="fc-day fc-widget-content fc-tue fc-future" data-date="2017-03-21"></td>
                                      <td class="fc-day fc-widget-content fc-wed fc-future" data-date="2017-03-22"></td>
                                      <td class="fc-day fc-widget-content fc-thu fc-future" data-date="2017-03-23"></td>
                                      <td class="fc-day fc-widget-content fc-fri fc-future" data-date="2017-03-24"></td>
                                      <td class="fc-day fc-widget-content fc-sat fc-future" data-date="2017-03-25"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td class="fc-day-number fc-sun fc-future" data-date="2017-03-19">19</td>
                                      <td class="fc-day-number fc-mon fc-future" data-date="2017-03-20">20</td>
                                      <td class="fc-day-number fc-tue fc-future" data-date="2017-03-21">21</td>
                                      <td class="fc-day-number fc-wed fc-future" data-date="2017-03-22">22</td>
                                      <td class="fc-day-number fc-thu fc-future" data-date="2017-03-23">23</td>
                                      <td class="fc-day-number fc-fri fc-future" data-date="2017-03-24">24</td>
                                      <td class="fc-day-number fc-sat fc-future" data-date="2017-03-25">25</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="fc-row fc-week fc-widget-content" style="height: 96px;">
                              <div class="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td class="fc-day fc-widget-content fc-sun fc-future" data-date="2017-03-26"></td>
                                      <td class="fc-day fc-widget-content fc-mon fc-future" data-date="2017-03-27"></td>
                                      <td class="fc-day fc-widget-content fc-tue fc-future" data-date="2017-03-28"></td>
                                      <td class="fc-day fc-widget-content fc-wed fc-future" data-date="2017-03-29"></td>
                                      <td class="fc-day fc-widget-content fc-thu fc-future" data-date="2017-03-30"></td>
                                      <td class="fc-day fc-widget-content fc-fri fc-future" data-date="2017-03-31"></td>
                                      <td class="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2017-04-01"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td class="fc-day-number fc-sun fc-future" data-date="2017-03-26">26</td>
                                      <td class="fc-day-number fc-mon fc-future" data-date="2017-03-27">27</td>
                                      <td class="fc-day-number fc-tue fc-future" data-date="2017-03-28">28</td>
                                      <td class="fc-day-number fc-wed fc-future" data-date="2017-03-29">29</td>
                                      <td class="fc-day-number fc-thu fc-future" data-date="2017-03-30">30</td>
                                      <td class="fc-day-number fc-fri fc-future" data-date="2017-03-31">31</td>
                                      <td class="fc-day-number fc-sat fc-other-month fc-future" data-date="2017-04-01">1</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td class="fc-event-container">
                                        <a class="fc-day-grid-event fc-event fc-start fc-end fc-draggable" href="http://google.com/" style="background-color:#3c8dbc;border-color:#3c8dbc">
                                          <div class="fc-content"><span class="fc-time">12a</span> <span class="fc-title">Click for Google</span></div>
                                        </a>
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="fc-row fc-week fc-widget-content" style="height: 96px;">
                              <div class="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td class="fc-day fc-widget-content fc-sun fc-other-month fc-future" data-date="2017-04-02"></td>
                                      <td class="fc-day fc-widget-content fc-mon fc-other-month fc-future" data-date="2017-04-03"></td>
                                      <td class="fc-day fc-widget-content fc-tue fc-other-month fc-future" data-date="2017-04-04"></td>
                                      <td class="fc-day fc-widget-content fc-wed fc-other-month fc-future" data-date="2017-04-05"></td>
                                      <td class="fc-day fc-widget-content fc-thu fc-other-month fc-future" data-date="2017-04-06"></td>
                                      <td class="fc-day fc-widget-content fc-fri fc-other-month fc-future" data-date="2017-04-07"></td>
                                      <td class="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2017-04-08"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td class="fc-day-number fc-sun fc-other-month fc-future" data-date="2017-04-02">2</td>
                                      <td class="fc-day-number fc-mon fc-other-month fc-future" data-date="2017-04-03">3</td>
                                      <td class="fc-day-number fc-tue fc-other-month fc-future" data-date="2017-04-04">4</td>
                                      <td class="fc-day-number fc-wed fc-other-month fc-future" data-date="2017-04-05">5</td>
                                      <td class="fc-day-number fc-thu fc-other-month fc-future" data-date="2017-04-06">6</td>
                                      <td class="fc-day-number fc-fri fc-other-month fc-future" data-date="2017-04-07">7</td>
                                      <td class="fc-day-number fc-sat fc-other-month fc-future" data-date="2017-04-08">8</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {}
  },
  methods: {}
}
</script>
