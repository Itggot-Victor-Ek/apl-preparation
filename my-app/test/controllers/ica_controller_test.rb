require 'test_helper'

class IcaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ica_index_url
    assert_response :success
  end

  test "should get show" do
    get ica_show_url
    assert_response :success
  end

end
