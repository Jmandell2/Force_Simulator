import pytest
from app.data_classes.force_vector import ForceVector





# TODO: implement testing
def test_force_vec():
    fv = ForceVector()
    assert fv.json_output == {'finger1': 1}
