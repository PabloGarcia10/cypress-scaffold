import { ApiRest } from "../../support/requests/ApiRest"

const api = new ApiRest()

context('First configuration of automation project', () => {
  it('apiRest', () => {
    api.executeGet('endpoint')
    api.executePost('endpoint')
    api.executePatch('endpoint')
    api.executePut('endpoint')
    api.executeDelete('endpointtest')
  })
});


