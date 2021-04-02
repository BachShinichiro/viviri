require 'test_helper'

class AuditionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get audition_index_url
    assert_response :success
  end

end
